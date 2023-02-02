import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { fetchAllComments } from "../../../api/style";
import { useAppSelector } from "../../../store/hooks";
import { StyleFeedComment } from "../../../types/style";

interface StyleFeedCommentOverviewProps {
  id: number;
}

interface FetchedData {
  previous: string | null;
  next: string | null;
  results: StyleFeedComment[];
}

const StyleFeedCommentOverview = ({ id }: StyleFeedCommentOverviewProps) => {
  const { accessToken } = useAppSelector((state) => state.session);

  const { data, isLoading } = useQuery<FetchedData, AxiosError>({
    queryKey: ["allStyleComments", id, accessToken],
    queryFn: () => fetchAllComments({ id, accessToken }),
  });

  return <></>;
};

export default StyleFeedCommentOverview;
