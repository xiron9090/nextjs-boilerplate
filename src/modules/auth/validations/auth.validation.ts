import * as yup from "yup";
interface ISignInSchemaValidation {
  emailMessage: string;
  emailMessageRequired: string;
  passwordMessageRequired: string;
  passwordMessageMin: string;
}
export const schemaValidationSignIn = ({
  emailMessage,
  emailMessageRequired,
  passwordMessageMin,
  passwordMessageRequired,
}: ISignInSchemaValidation) =>
  yup
    .object({
      email: yup.string().email(emailMessage).required(emailMessageRequired),
      password: yup
        .string()
        .required(passwordMessageRequired)
        .min(8, passwordMessageMin),
       
    })
    .required();
    export const schemaValidationSignUp = ({
      emailMessage,
      emailMessageRequired,
      passwordMessageMin,
      passwordMessageRequired,
    }: ISignInSchemaValidation) =>
      yup
        .object({
          email: yup.string().email(emailMessage).required(emailMessageRequired),
          password: yup
            .string()
            .required(passwordMessageRequired)
            .min(8, passwordMessageMin),
            repeatPassword :  yup.string()
            .test('password-should-match', 'Passwords must match', function(value){
              return this.parent.password === value
            }),
        })
        .required();