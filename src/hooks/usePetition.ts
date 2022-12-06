import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { endLoading, startLoading } from "../redux/slices/loading";
import { IPaginationParams } from "./usePaging";
import { useState } from "react";
import { CreatePetitionDto, Petition } from "../models/Petition";
import documentsPng from "../assets/documents.png";

export const usePetition = () => {
  const dispacth = useDispatch();
  const [petitions, setPetitions] = useState<Petition[]>([
    new Petition(
      `คำร้อง ใบรายงานผลการศึกษา (ยังไม่สำเร็จการศึกษา / สำเร็จการศึกษา)`,
      "documents",
      documentsPng
    ),
    new Petition(
      `ใบรับรองสภาพนักศึกษา (ยังไม่สำเร็จการศึกษา / ระหว่างรออนุมัติ /
            สำเร็จการศึกษา)`,
      "documents"
    ),
    new Petition(`อื่น ๆ`, "documents"),
  ]);
  const [petition, setPetition] = useState<Petition | null>(null);
  const LoginSchema = Yup.object().shape({
    name: Yup.string().required(),
  });

  const defaultValues = new CreatePetitionDto();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const getMany = async (payload: IPaginationParams) => {
    dispacth(startLoading());
    dispacth(endLoading());
  };
  const getOne = async (payload: CreatePetitionDto) => {
    dispacth(startLoading());
    dispacth(endLoading());
  };
  const createOne = async (payload: CreatePetitionDto) => {
    dispacth(startLoading());
    setError("afterSubmit", {
      message: "",
    });
    dispacth(endLoading());
  };
  const updateOne = async (payload: CreatePetitionDto) => {
    dispacth(startLoading());
    setError("afterSubmit", {
      message: "",
    });
    dispacth(endLoading());
  };
  const deleteOne = async (payload: CreatePetitionDto) => {
    dispacth(startLoading());
    setError("afterSubmit", {
      message: "",
    });
    dispacth(endLoading());
  };

  return {
    handleSubmit,
    clearErrors,
    errors,
    isSubmitting,
    methods,
    getMany,
    getOne,
    createOne,
    updateOne,
    deleteOne,
    reset,
    petitions,
    petition,
  };
};
