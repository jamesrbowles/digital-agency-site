'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import testimonials from '@/data/testimonials';
import ReactPaginate from 'react-paginate';

export default function HomeTestimonials() {
  const testimonialsPerPage = 1;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(0); // react-paginate uses zero-based indexing

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const indexOfLastTestimonial = (currentPage + 1) * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  );

  return (
    <div className="max-w-[1316px] mx-auto px-5 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center font-bold mb-12 mt-24">
        What They Say About Us
      </h1>
      {currentTestimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="w-full mb-28 flex gap-[72px] max-[889px]:flex-col max-[889px]:justify-center max-[889px]:items-center"
        >
          <div className="flex flex-col w-[808px] max-[889px]:w-full">
            <div className="h-min bg-white  dark:bg-off-black drop-shadow-md relative rounded-lg mb-12">
              <p className="mx-12 mb-6 pt-16 dark:text-white dark:text-opacity-70">
                {testimonial.content}
              </p>
              <div className="bg-primary p-[13px] absolute -top-5 left-12 rounded-lg drop-shadow-md">
                <FaQuoteLeft className=" text-white text-xl" />
              </div>
              <div className="flex mx-12 pb-12">
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
              </div>
            </div>
            <ReactPaginate
              previousLabel={
                <span className="">
                  <FaChevronLeft />
                </span>
              }
              nextLabel={
                <span className="">
                  <FaChevronRight />
                </span>
              }
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName="flex items-center justify-start max-[889px]:justify-center gap-2 pagination-links"
              activeClassName="bg-primary text-white hover:bg-primary rounded-lg"
              forcePage={currentPage} // Use forcePage to set the active page
            />
          </div>
          <div className="max-[889px]:order-first max-[889px]:flex max-[889px]:flex-col max-[889px]:justify-center max-[889px]:items-center">
            <div className="relative w-[416px] h-[360px] mb-8 max-[889px]:w-[200px] max-[889px]:h-[200px]">
              <Image
                className="rounded-lg"
                src={testimonial.image}
                alt="testimonial image"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="flex flex-start gap-6">
              <Image
                className=""
                src="/assets/images/testimonials/logo.png"
                alt="Hero Globe"
                width={114}
                height={114}
                style={{ objectFit: 'cover' }}
              />
              <div className="w-[1px] h-[50px] bg-tagline bg-opacity-40"></div>
              <div className="flex flex-col">
                <h3 className="font-bold">{testimonial.author}</h3>
                <span className="text-sm text-tagline">{testimonial.role}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
