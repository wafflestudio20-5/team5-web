import axios, { AxiosError } from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../libs/urls";

import { StyleFeed } from "../../../types/style";
import StyleFeedContent from "../style-feed-content";
import StyleFeedThumbnail from "../style-feed-thumbnail";
import {
  FeedContent,
  FeedImg,
  FeedWrapper,
  MasonryWrapper,
  StyledHashLink,
  Wrapper,
} from "./style-feed-overview.styled";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAllStyleFeed } from "../../../api/style";
import CircularProgress from "@mui/material/CircularProgress";
import { scrollWithOffset } from "../../../utils/HashLink";
import { useAppSelector } from "../../../store/hooks";
import { useIntersect } from "../../../hooks/useIntersect";
import Masonry from "@mui/lab/Masonry";

interface FetchedData {
  previous: string;
  next: string;
  results: StyleFeed[];
}

const StyleFeedOverview = () => {
  const { accessToken } = useAppSelector((state) => state.session);

  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery<
    FetchedData,
    AxiosError
  >(
    ["allStyleFeeds", accessToken],
    ({ pageParam = "" }) => fetchAllStyleFeed({ pageParam, accessToken }),
    {
      getNextPageParam: ({ next }) =>
        next?.length > 0
          ? next.split("cursor")[1].split("&")[0].slice(1)
          : undefined,
      staleTime: 5000,
    }
  );

  const feeds = useMemo(
    () => (data ? data.pages.flatMap((data) => data.results) : []),
    [data]
  );

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <Wrapper>
      <Masonry columns={4} spacing={2}>
        {feeds.map((feed) => (
          <FeedWrapper key={feed.id}>
            <StyledHashLink
              to={`/style/details#${feed.id}`}
              scroll={(el) => scrollWithOffset(el)}
            >
              <FeedImg>
                <StyleFeedThumbnail thumbnail={feed.images[0]} />
              </FeedImg>
            </StyledHashLink>

            <FeedContent>
              <StyleFeedContent
                id={feed.id}
                uid={feed.created_by.user_id}
                uimage={feed.created_by.image}
                nickname={feed.created_by.user_name}
                content={feed.content}
                likes={feed.num_likes}
                liked={feed.liked}
              />
            </FeedContent>
          </FeedWrapper>
        ))}
      </Masonry>

      {isFetching && hasNextPage && <CircularProgress />}
      <div style={{ height: "1px" }} ref={ref}></div>
    </Wrapper>
  );
};

export default StyleFeedOverview;
