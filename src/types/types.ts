export type FormDataStep1 = {
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
  interests: string[];
};

export type FormDataStep2 = {
  avatar?: File;
};
