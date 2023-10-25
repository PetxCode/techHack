import { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../api/API";
import LoadingState from "../../LoadingState";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const yupSchema = yup.object({
    userName: yup.string().required("Field must be filled"),
    email: yup.string().email().required("Field must be filled"),
    password: yup.string().required("Field must be filled"),
    confirm: yup.string().oneOf([yup.ref("password")], "doesn't match"),
  });

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(yupSchema),
  });

  console.log(loading);
  const onSubmit = handleSubmit(async (data: any) => {
    setLoading(true);
    createUser(data)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your account has been created successfully",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/confirm-account");
        });
      })
      .catch((error) => {
        Swal.fire({
          title: error.response.data.message,
          text: `Please check and fix this ERROR`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        }).then(() => {
          // setLoading(false);
        });
      });
  });

  return (
    <Container>
      {loading ? <LoadingState /> : null}
      <Wrapper></Wrapper>
      <NewCard>
        <Card>
          <Form onSubmit={onSubmit}>
            <Image src={logo} />

            <InputHolder>
              <Blocker>Enter UserName</Blocker>
              <Input placeholder="Enter User Name" {...register("userName")} />
            </InputHolder>

            <InputHolder>
              <Blocker>Enter Email</Blocker>
              <Input placeholder="Enter Email" {...register("email")} />
            </InputHolder>

            <InputHolder>
              <Blocker>Enter Password</Blocker>
              <Input
                type="password"
                placeholder="Enter Password"
                {...register("password")}
              />
            </InputHolder>

            <InputHolder>
              <Blocker>Confirm Password</Blocker>
              <Input
                type="password"
                placeholder="Enter Confirm Password"
                {...register("confirm")}
              />
            </InputHolder>
            <br />
            <Button type="submit">Register</Button>

            <br />

            <Text>
              Already have an Account
              <Span to="/sign-in">Log in </Span> Here
            </Text>
          </Form>
        </Card>
      </NewCard>
    </Container>
  );
};

export default Register;

const NewCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 600px;
  min-height: 300px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;

  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 20px 0;
  }
`;

const Image = styled.img`
  height: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Blocker = styled.div`
  position: absolute;
  top: -3px;
  background-color: white;
  padding: 0 5px;
  font-size: 12px;
  left: 10px;
  color: #7e22ce;
`;

const InputHolder = styled.div`
  position: relative;
  width: 90%;
  margin: 10px 0;
`;

const Span = styled(Link)`
  margin: 0 5px;
  text-decoration: none;
  color: #7e22ce;
  font-weight: 700;

  :hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  display: flex;
  font-size: 12px;
  text-transform: uppercase;
`;

const Button = styled.button`
  width: 80%;
  height: 45px;
  margin-left: -20px;
  /* padding: 10px 50px; */
  background-color: #7e22ce;
  font-family: Poppins;
  outline: none;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 3px;
  margin-top: 15px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 17px;
  transition: all 350ms;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 90%;
  outline: none;
  border: 1px solid #7e22ce;
  height: 40px;
  margin: 5px 0;
  border-radius: 3px;
  padding-left: 10px;

  ::placeholder {
    font-family: Poppins;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Card = styled.div`
  width: 400px;
  min-height: 550px;
  border-radius: 5px;
  box-shadow: rgba(255, 255, 255, 0.02) 0px 1px 3px 0px,
    rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;
  background: white;
  z-index: 1;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
  background: red;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/bg.svg");
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 550px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;
