import React from 'react';
import { useState, useEffect } from "react";
import BookCard from './books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Recommended = () => {
  
  const {data: books = []} = useFetchAllBooksQuery();

  return (
    <div className='py-16'>
      <h2 className='text-3xl font-semibold mb-6'>Recommended for you</h2>

      <Swiper
slidesPerView={3}
spaceBetween={30}
navigation= {true}

breakpoints={{
  640: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
  1180: {
    slidesPreview: 3,
    spaceBetween: 50,
  }
}}
modules={[Pagination, Navigation]}
className="mySwiper"
>

{
books.length > 0 && books.slice(8, 16).map((book, index)=> (
  <SwiperSlide key={index}>
    <BookCard key={index} book={book}/>
  </SwiperSlide>
))
}
</Swiper>

    </div>


  )
}

export default Recommended
