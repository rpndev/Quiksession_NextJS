const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { omitBy, isNil } = require("lodash");
const APIError = require("../utils/APIError");
const User = require("./user.model");

/**
 * Studio Schema
 * @private
 */
const studioSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    photo: {
      type: String,
    },
    address: {
      type: String,
      require: true,
    },
    roomType: {
      type: String,
      required: true,
    },
    location: {
      lat: {
        type: Number,
        require: true,
      },
      lng: {
        type: Number,
        require: true,
      },
    },
    room: [
      {
        roomName: { type: String, require: true },
        price: { type: Number, require: true },
        photo: { type: String },
      },
    ],
    service: [
      {
        serviceName: { type: String, require: true },
        price: { type: Number, require: true },
      },
    ],
    equip: [
      {
        equipName: { type: String, require: true },
        price: { type: Number, require: true },
      },
    ],
    engineer: [
      {
        engineerName: { type: String, require: true },
        price: { type: Number, require: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

/**
 * Methods
 */
studioSchema.method({
  // Transform studio data for returning to the response
  transform() {
    const transformed = {};
    const fields = [
      "id",
      "name",
      "phoneNumber",
      "address",
      "location",
      "room",
      "service",
      "equip",
      "engineer",
      "photo",
      "price",
      "roomType",
      "createdAt",
    ];

    // Pick only necessary fields from Studio schema
    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    // Transform Owner object if exists
    if (this.owner instanceof User) {
      transformed["owner"] = this.owner.transform();
    }
    return transformed;
  },
});

/**
 * Statics
 */
studioSchema.statics = {
  /**
   * Get studio
   *
   * @param {ObjectId} id - The objectId of studio.
   * @returns {Promise<Studio, APIError>}
   */
  async get(id) {
    try {
      let studio;

      // Get studio with studioId
      if (mongoose.Types.ObjectId.isValid(id)) {
        studio = await this.findById(id).populate("owner");
      }
      if (studio) {
        return studio;
      }

      // Returns error if studio doesn't exist
      throw new APIError({
        message: "Studio does not exist",
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },

  /**
   * List studios in descending order of 'createdAt' timestamp.
   *
   * @returns {Promise<User[]>}
   */
  async list({ minPrice, maxPrice }) {
    let match = {};
    // Configure match in order to find destination or comment by keyword
    if (minPrice || maxPrice) {
      let query = {};
      if (minPrice) {
        query["$gte"] = parseInt(minPrice);
      }
      if (maxPrice) {
        query["$lte"] = parseInt(maxPrice);
      }
      match["price"] = query;
    }
    // compose mongo aggregate to list studios
    try {
      let aggregate = [
        {
          $lookup: {
            from: "users",
            localField: "owner",
            foreignField: "_id",
            as: "owner",
          },
        },
        { $unwind: "$owner" },
        {
          $project: {
            _id: 0,
            id: "$_id",
            name: 1,
            address: 1,
            location: 1,
            phoneNumber: 1,
            price: 1,
            room: 1,
            photo: 1,
            service: 1,
            equip: 1,
            engineer: 1,
            roomType: 1,
            createdAt: 1,
            "owner.id": "$owner._id",
            "owner.email": 1,
            "owner.name": 1,
          },
        },
        {
          $match: match,
        },
        { $sort: { createdAt: 1 } },
      ];

      let studios = await this.aggregate(aggregate);
      return studios;
    } catch (error) {
      throw error;
    }
  },
};

/**
 * @typedef Studio
 */
module.exports = mongoose.model("Studio", studioSchema);
