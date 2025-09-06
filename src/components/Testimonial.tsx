import { memo, useMemo, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation } from "swiper/modules";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

interface Review {
  rating: number;
  review: string;
  img: string;
  name: string;
  position: string;
  company: string;
}

const ReviewCard: React.FC<Review> = memo(
  ({ rating, review, img, name, position, company }) => (
    <div className="px-10 py-5 bg-primary-dark flex flex-col gap-5 justify-center items-start rounded-2xl max-w-[450px] md:max-w-full cursor-grab">
      <div className="flex flex-row gap-2 md:gap-5 justify-center items-center">
        {Array.from({ length: rating }).map((_, i) => (
          <img
            key={i}
            loading="lazy"
            src="./icons/round-star.png"
            alt="round star"
            className="w-5 h-5 lg:w-8 lg:h-8"
          />
        ))}
        <p className="text-[16px] lg:text-[20px] font-medium -mb-1">{rating}</p>
      </div>
      <p className="text-[16px]">{review}</p>
      <div className="flex flex-row justify-center items-start gap-5">
        <img
          loading="lazy"
          src={img}
          alt="profile pic"
          className="rounded-full w-10 h-10"
        />
        <div>
          <p className="text-[20px] font-medium">{name}</p>
          <span className="flex flex-row gap-2">
            {position}, <p>{company}</p>
          </span>
        </div>
      </div>
    </div>
  )
);

const Testimonial: React.FC = () => {
  const reviews = useMemo<Review[]>(
    () => [
      {
        rating: 5,
        review:
          "During his tenure with us, he exhibited a remarkable aptitude for front-end website development and consistently demonstrated a strong work ethic, dedication, and a keen interest in enhancing his skills in this field. He actively contributed to various projects and initiatives, making valuable contributions to our development team.",
        img: "./icons/profile.png",
        name: "Umar Wazir",
        position: "CEO",
        company: "Poiesis Tech",
      },
      {
        rating: 5,
        review:
          "Rizwan really brought my vision to life with a stunning, user-friendly design that captures my brand perfectly. Their attention to detail and quick responses made the whole process a breeze. The site looks amazing and performs flawlessly, providing a great experience for my visitors. I highly recommend his services to everyone.",
        img: "./icons/profile.png",
        name: "Ahsan Abbasi",
        position: "Manager",
        company: "Haveli One",
      },
      {
        rating: 5,
        review:
          "During the internship, He not only honed his technical skills but also exhibited a keen eye for detail but a collaborative spirit, making significant contributions to our projects. We are proud of his achievements and are confident that proficiency in React and front-end development will serve as a strong foundation for a promising career web development.",
        img: "./icons/profile.png",
        name: "Ashfaq Ahmed",
        position: "Manager",
        company: "BluComm Tech",
      },
      {
        rating: 5,
        review:
          "Rizwan showed leadership and determination along with working and delivering complete and optimized web pages. He really helped everyone get a better understanding on how things work in the world of web development. He also helped me in the projects where we working as a team. I'm sure his abilities will bring great fortunes for any company.",
        img: "./icons/profile.png",
        name: "Sajid Ali",
        position: "Web Developer",
        company: "Poiesis Tech",
      },
      {
        rating: 5,
        review:
          "All of the designs that i made in figma were perfectly copied with coding in React. He not only understood that tasks but provided potential feedback that helped me get better in designing more versatile designs. His ability to communicate and assess different situations were greatly helpful in meeting deadlines. Highly recommended for any company.",
        img: "./icons/profile.png",
        name: "Amna Gufran",
        position: "UI/UX Designer",
        company: "Poiesis Tech",
      },
      {
        rating: 5,
        review:
          "Working with Rizwan on React projects has been a consistently positive experience. He approaches every task with focus and a problem-solving mindset, often suggesting improvements that enhance overall performance. Beyond his technical skills, his openness to share knowledge made teamwork smooth and rewarding.",
        img: "./icons/profile.png",
        name: "Abdullah Siddiqui",
        position: "React Developer",
        company: "Envio by Vista",
      },
      {
        rating: 5,
        review:
          "As a Project Manager, I found Rizwan to be both dependable and adaptable in fast-paced project cycles. He handled changing requirements with ease, communicated progress clearly, and always kept quality at the forefront. His ability to balance deadlines with attention to detail made a real impact on our deliverables.",
        img: "./icons/profile.png",
        name: "Muzafar Shah",
        position: "Project Manager",
        company: "Envio by Vista",
      },
      {
        rating: 5,
        review:
          "Rizwan's expertise in React stood out in every project we worked on together. He consistently ensured the codebase was clean, scalable, and easy to maintain. His ability to tackle complex integrations while keeping user experience smooth showed both technical strength and creativity in problem-solving abilities.",
        img: "./icons/profile.png",
        name: "Hassaan Raheel",
        position: "React Developer",
        company: "Envio by Vista",
      },
      {
        rating: 5,
        review:
          "Rizwan's contributions at our company have been impressive and dependable. He quickly understands project needs, offers valuable input, and delivers high-quality results that exceed expectations. His mix of technical expertise and collaborative mindset has directly strengthened both our products and the culture of our team.",
        img: "./icons/profile.png",
        name: "Aqeel Ahmed",
        position: "CEO",
        company: "Envio by Vista",
      },
    ],
    []
  );

  const renderReview = useCallback(
    (review: Review) => (
      <SwiperSlide key={review.name}>
        <ReviewCard {...review} />
      </SwiperSlide>
    ),
    []
  );

  return (
    <>
      <section className="px-8 lg:px-32 py-10 md:py-20 bg-primary">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col justify-center items-start md:items-center">
            <p className="text-[20px] text-gradient font-medium">Testimonial</p>
            <p className="text-[40px] font-semibold">
              Awesome Clients Feedback
            </p>
          </div>

          <ScrollAnimation animateIn="fadeIn" duration={0.8} animateOnce>
            <div className="mt-20">
              <Swiper
                direction="horizontal"
                navigation={{ prevEl: "#arrow_left", nextEl: "#arrow_right" }}
                slidesPerView={1}
                spaceBetween={10}
                centeredSlides
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    centeredSlides: false,
                  },
                  1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                    centeredSlides: false,
                  },
                }}
                className="flex flex-row justify-center items-center flex-wrap gap-30"
              >
                {reviews.map(renderReview)}
              </Swiper>

              <div className="flex flex-row justify-center items-center gap-10 mt-10">
                <img
                  loading="lazy"
                  id="arrow_left"
                  src="./icons/arrow-left.png"
                  alt="arrow-left"
                  className="w-[50px] h-[50px] p-5 background-gradient cursor-pointer rounded-full ease-out duration-300 object-cover"
                />
                <img
                  loading="lazy"
                  id="arrow_right"
                  src="./icons/arrow-right.png"
                  alt="arrow-right"
                  className="w-[50px] h-[50px] p-5 background-gradient cursor-pointer rounded-full ease-in-out duration-300 object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <div className="bg-primary-dark py-10 md:py-20 w-full" />
    </>
  );
};

export default memo(Testimonial);
