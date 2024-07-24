export type TPortfolio = {
  name: string;
  type: string;
  description: string[];
  technology: string[];
  image: {
    cover: string;
    landing: string;
  };
  liveUrl: string;
  clientUrl?: string;
  serverUrl?: string;
};

export type TContact = {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};
