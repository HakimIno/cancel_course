import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { endLoading, startLoading } from "../redux/slices/loading";
import { IPaginationParams } from "./usePaging";
import { useState } from "react";
import {
  CreateActivityDto,
  Activity,
  CreateActivityItemDto,
} from "../models/Activity";
import { usePetition } from "./usePetition";

export const useActivity = () => {
  const dispacth = useDispatch();
  const [activitys, setActivitys] = useState<Activity[]>([]);
  const [activity, setActivity] = useState<Activity | null>(null);
  const schema = Yup.object().shape({
    phone: Yup.string(),
    email: Yup.string(),
    address: Yup.string(),
    channal_receiving: Yup.string(),
    items: Yup.array()
      .of(
        Yup.object().shape({
          quantity: Yup.number(),
          petition_id: Yup.number(),
        })
      )
      .compact((v) => !v.checked)
      .min(1),
  });

  const { petitions } = usePetition();

  const defaultValues = new CreateActivityDto(
    "",
    "",
    "",
    "PICKUP",
    petitions.map((p) => new CreateActivityItemDto(0, p.id)),
    "1"
  );

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    reset,
    setError,
    clearErrors,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  const { fields: itemFields } = useFieldArray({
    control,
    name: "items",
  });

  const getMany = async (payload: IPaginationParams) => {
    dispacth(startLoading());
    dispacth(endLoading());
  };
  const getOne = async (payload: CreateActivityDto) => {
    dispacth(startLoading());
    dispacth(endLoading());
  };
  const createOne = async (payload: CreateActivityDto) => {
    dispacth(startLoading());
    setError("afterSubmit", {
      message: "",
    });
    dispacth(endLoading());
  };
  const updateOne = async (payload: CreateActivityDto) => {
    dispacth(startLoading());
    setError("afterSubmit", {
      message: "",
    });
    dispacth(endLoading());
  };
  const deleteOne = async (payload: CreateActivityDto) => {
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
    activitys,
    activity,
    itemFields,
    petitions
  };
};
