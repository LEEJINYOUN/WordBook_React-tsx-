import { UserInfoType } from "../components/TypeAlias";

export type AuthCreateType = {
  email: string;
  nickname: string;
  name: string;
  password: string;
};

export interface AuthGetLoginType {
  email: string;
  setUser: React.Dispatch<React.SetStateAction<UserInfoType | null>>;
}
export interface AuthLoginType extends AuthGetLoginType {
  password: string;
}

export type AddWordObjectType = {
  writer: string | undefined;
  enWord: string;
  krWord: string;
  bookmark: boolean;
  today: object;
};

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
};
