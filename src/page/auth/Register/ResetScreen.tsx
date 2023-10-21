import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const url = "https://set07.onrender.com";

const ResetScreen = () => {
  const { id, token } = useParams();

  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const yupSchema = yup.object({
    email: yup.string().email().required("Field must be filled"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    await axios
      .post(`${url}/api/user/reset`, data)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Check your mail for confirmation",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/confirm-reset");
        });
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          title: error.response.data.message,
          text: `Please check and fix this ERROR`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        }).then(() => {
          setLoading(false);
        });
      });
  });

  useEffect(() => {
    if (id && token) {
      axios.get(`${url}/api/user/${id}/${token}`);
    }
  }, []);

  return (
    <Container>
      {/* {loading ? <LoadingState /> : null} */}
      <Wrapper>
        <Card>
          <Form onSubmit={onSubmit}>
            <Image src={logo} />

            <InputHolder>
              <Blocker>Enter Email</Blocker>
              <Input placeholder="Enter Email" {...register("email")} />
            </InputHolder>
            {/* <Error>{errors.email?.message}</Error> */}

            <br />
            <Button type="submit">Reset Password</Button>
            <br />
            <Text>
              hmmm i think, i now remember
              <Span to="/sign-in">Let me try again</Span>
            </Text>
          </Form>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default ResetScreen;

const Image = styled.img`
  height: 50px;
  margin: 30px 0;
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
  margin-right: 20px;
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
  padding-left: 15px;
`;

const Card = styled.div`
  width: 380px;
  min-height: 400px;
  border-radius: 5px;
  box-shadow: rgba(255, 255, 255, 0.02) 0px 1px 3px 0px,
    rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;
  background: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/bg.svg");
  display: flex;
  justify-content: center;
  align-items: center;
`;
