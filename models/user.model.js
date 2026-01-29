import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {

    imgurl: {
      type: String,
      required: true
    },


    title: {
      type: String,
      required: true,
      trim: true
    },

    author: {
      type: String,
      required: true,
      trim: true
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    category: {
      type: String,
      required: true,
      enum: ['Fiction', 'Non-Fiction', 'Education', 'Biography', 'Comics']
    },

    description: {
      type: String,
      trim: true
    },

    isAvailable: {
      type: Boolean,
      default: true
    },

    publishedAt: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

const Book = mongoose.model('Book', bookSchema);
export default Book;