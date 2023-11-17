import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "code";

export const CommentTitle = (record: TComment): string => {
  return record.code?.toString() || String(record.id);
};
