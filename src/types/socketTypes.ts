export interface Sender {
  username: string;
  _id: string;
  __v: number;
}

export interface Message {
  sender: Sender;
  text: string;
  timestamp: string;
  _id: string;
  __v: string;
}

export enum CHAT_EVENT {
  MESSAGE = "chat:message",
  HISTORY = "chat:history",
  PUBLIC_TYPING = "chat:public-users-typing",
  USERS_LIST = "chat:users-list",
  USER_STATUS_UPDATE = "chat:user-status-update",
}
