export type AuthLoginTypeRequest = {
  email: string;
  password: string;
};

export interface IBaseAuth {
  signIn(input: unknown): Promise<unknown>;
  singUp(input: unknown): Promise<unknown>;
  forgotPassword(input: unknown): Promise<unknown>;
  singInWithSocialMedia(input: unknown): Promise<unknown>;
}
