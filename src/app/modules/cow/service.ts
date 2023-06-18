import { TGenericRes, TPagination } from '../../../interfaces/common';
import { cowFilterableFields } from './constants';
import { TCow, TCowFilter } from './interface';
import { SortOrder } from 'mongoose';
import { CowModel } from './model';
import calculatePagination from '../../../utils/calculatePagination';

const connectedUser = 'seller';

// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

const createCow = async (payload: TCow): Promise<TCow> => {
  const result = (await CowModel.create(payload)).populate(connectedUser);

  return result;
};

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const getSingleCow = async (id: string): Promise<TCow | null> => {
  const result = await CowModel.findById(id).populate(connectedUser);

  return result;
};

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const updateCow = async (
  id: string,
  payload: Partial<TCow>
): Promise<TCow | null> => {
  const result = await CowModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  }).populate(connectedUser);
  return result;
};

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

const deleteCow = async (id: string): Promise<TCow | null> => {
  const result = await CowModel.findByIdAndDelete(id);

  return result;
};

// 🔎🔎🔎🔎🔎🔎🔎🔎🔎🔎🔎🔎🔎🔎🔎🔍🔍🔍🔍🔍🔍🔍🔍🔍🔍🔍🔍🔍🔍

// get documents, with pagination support...
const getAllCow = async (
  filters: TCowFilter,
  paginationOption: TPagination
): Promise<TGenericRes<TCow[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andCondition = [];

  // Dynamic Searching... for [partial] match by url query
  if (searchTerm) {
    andCondition.push({
      $or: cowFilterableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  // Dynamic Filtering... for [exact] match by url query
  if (Object.keys(filtersData).length) {
    andCondition.push({
      $and: Object.entries(filtersData).map(([key, value]) => ({
        [key]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOption);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  // with filter or without filtering data passing check...
  const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {};

  const result = await CowModel.find(whereCondition)
    .populate(connectedUser)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await CowModel.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result, // return [array of {objects}]
  };
};

export const cowService = {
  createCow,
  getAllCow,
  getSingleCow,
  updateCow,
  deleteCow,
};
