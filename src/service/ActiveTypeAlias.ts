import { NavigateType, UserInfoType } from "../components/TypeAlias";

export interface AuthCreateType extends NavigateType {
  email: string;
  nickname: string;
  name: string;
  password: string;
}

export interface AuthGetLoginType extends NavigateType {
  email: string;
  setUser: React.Dispatch<React.SetStateAction<UserInfoType | null>>;
}
export interface AuthLoginType extends AuthGetLoginType, NavigateType {
  password: string;
}

export interface AddWordObjectType {
  writer: string | undefined;
  enWord: string;
  krWord: string;
  bookmark: boolean;
  today: object;
}

export interface AddWordCheckType extends AddWordObjectType {
  setEnWord: React.Dispatch<React.SetStateAction<string>>;
  setKrWord: React.Dispatch<React.SetStateAction<string>>;
}

export type GetWordsListType = {
  writer: string | undefined;
  setGetWords: React.Dispatch<React.SetStateAction<any[]>>;
};

export type QuizGetWordsListType = {
  writer: string | undefined;
  setGetWords: React.Dispatch<React.SetStateAction<any[]>>;
};

export type GetRecordsListActiveType = {
  writer: string | undefined;
  setGetRecords: React.Dispatch<React.SetStateAction<any[]>>;
};

export interface ResultPushType {
  writer: string | undefined;
  today: string;
  matchedArr: object[];
  NotMatchedArr: object[];
}

export type DateRecordType = {
  id: string;
  setGetRecordDateMatched: React.Dispatch<React.SetStateAction<Array<any>>>;
  setGetRecordDateNotMatched: React.Dispatch<React.SetStateAction<Array<any>>>;
  setGetRecordDate: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface QuizStopType extends ResultPushType {
  setQuizEnd: React.Dispatch<React.SetStateAction<boolean>>;
}

export type AuthDeleteType = {
  email: string | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserInfoType | null>>;
  navigate: any;
};

export type AddBoardType = {
  writer: string | undefined;
  category: string;
  title: string;
  content: string;
  today: string;
};

export type GetBoardsListActiveType = {
  setGetBoards: React.Dispatch<React.SetStateAction<any[]>>;
};

export type GetBoardReadActiveType = {
  id: string;
  setBoardRead: React.Dispatch<React.SetStateAction<any[]>>;
  setBoardReadModal: React.Dispatch<React.SetStateAction<boolean>>;
};
