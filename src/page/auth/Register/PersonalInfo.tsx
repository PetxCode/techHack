import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import LoadingState from "../../LoadingState";
import { useGetUser } from "../../hooks/useGetUser";
import { useMutation } from "@tanstack/react-query"
import { updateUserInfo } from "../../utils/API";
import { useQueryPost } from "../../hooks/useQueryPost";
// updateUserInfo

const url = "https://codelab-hub.onrender.com";

const PersonalInfo = () => {
  const user: any = useGetUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const yupSchema = yup.object({
    userName: yup.string().required("Field must be filled"),
    motivate: yup.string().required("Field must be filled"),
    prof: yup.string().required("Field must be filled"),
  });

  type formData = yup.InferType<typeof yupSchema>;


  const {
    handleSubmit,
    register,
  } = useForm<formData>({
    resolver: yupResolver(yupSchema),
  });

  const mutation = useMutation({
    mutationKey: ["fetchData"],

    mutationFn: (value) => updateUserInfo(user?._id, value),

    onSuccess: () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your account has been created successfully",
        showConfirmButton: false,
        timer: 2500,
      }).then(() => {
        navigate("/dashboard");
      });
      setLoading(false);
    },

    onError: (error: any) => {
      Swal.fire({
        title: error.response.data.message,
        text: `Please check and fix this ERROR`,
        icon: "error",
        showConfirmButton: false,
        timer: 3500,
      }).then(() => {
        setLoading(false);
      });
    }

  })

  const onSubmit = handleSubmit(async (data: any) => {
    setLoading(true)
    mutation.mutate(data)

  });

  return (
    <Container>
      {loading ? <LoadingState /> : null}
      <Card>
        <Form onSubmit={onSubmit}>
          <Text>Updating Personal info</Text>
          <InputHolder>
            <Blocker>userName</Blocker>

            <Input
              placeholder="Enter Your user name"
              defaultValue={user?.userName}
              {...register("userName")}
            />
          </InputHolder>
          <InputHolder>
            <Blocker>Profession</Blocker>

            <Input
              placeholder="Enter Your Profession"
              defaultValue={user?.prof}
              {...register("prof")}
            />

          </InputHolder>
          <InputHolder>
            <Blocker>Motivation</Blocker>

            <Input
              placeholder="What Motivate's You"
              defaultValue={user?.motivate}
              {...register("motivate")}
            />

          </InputHolder>
          {/* <Error>{errors.userName?.message}</Error> */}

          <br />
          <Button type="submit" bg="darkorange">
            update my info
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default PersonalInfo;

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  z-index:-10;

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const CardWrapper = styled.div`
  justify-content: center;
  display: flex;
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const InputArea = styled.textarea`
  resize: none;
  padding-top: 10px;
  width: 90%;
  outline: none;
  border: 1px solid purple;
  height: 100px;
  margin: 5px 0;
  border-radius: 3px;
  padding-left: 10px;

  ::placeholder {
    font-family: Poppins;
  }
`;

const Input = styled.input`
  width: 90%;
  outline: none;
  border: 1px solid purple;
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
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const Card = styled.div`
  margin-top: 30px;
  width: 400px;
  min-height: 300px;
  border-radius: 5px;
`;

const Span = styled(Link)`
  margin: 0 5px;
  text-decoration: none;
  color: purple;
  font-weight: 700;

  :hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  display: flex;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Image = styled.img`
  height: 150px;
`;
const Error = styled.p`
  margin: 0;
  color: red;
  display: flex;
  justify-content: flex-end;
  width: 80%;
  font-size: 12px;
  margin-top: -15px;
  margin-right: 5px;
`;

const Blocker = styled.div`
  position: absolute;
  top: -3px;
  background-color: white;
  padding: 0 5px;
  font-size: 12px;
  left: 10px;
  color: purple;
`;

const InputHolder = styled.div`
  position: relative;
  width: 90%;
  margin: 10px 0;
`;

const Button = styled.button<{ bg: string }>`
  outline: none;
  border: 0;
  text-align: center;
  margin: 10px;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  background-color: ${({ bg }) => bg};
  font-size: 15px;
  text-transform: uppercase;
  transition: all 350ms;
  margin-bottom: 20px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;