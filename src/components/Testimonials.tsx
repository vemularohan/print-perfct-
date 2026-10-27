import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "Price is very reachable and printing qualities excellent. I started with the new year with nice printing person.",
    image: "",
    name: "NB Ravi",
    role: "⭐⭐⭐⭐⭐ 5.0",
  },
  {
    text: "The sweatshirt print is awesome and quality of the print was top-notch. I suggest everyone to visit once and try your customised print on your things. 🤩",
    image: "",
    name: "Abhilash Nani",
    role: "⭐⭐⭐⭐⭐ 5.0",
  },
  {
    text: "Reasonable price and on time delivery and good printing quality.",
    image: "",
    name: "Sattibabu A",
    role: "⭐⭐⭐⭐ 4.0",
  },
  {
    text: "Quick response and Great Quality at great prices. Amazing staff. Totally loved the jerseys!",
    image: "",
    name: "KARUKONDA MAHALAKSHMI",
    role: "⭐⭐⭐⭐⭐ 5.0",
  },
  {
    text: "Very best to printing on shirts and cups. I really appreciate it. Go for it!",
    image: "",
    name: "Chigda Kumar",
    role: "⭐⭐⭐⭐ 4.0",
  },
  {
    text: "Good service and good quality T-shirts 🙂",
    image: "",
    name: "Balaji Balaji",
    role: "⭐⭐⭐⭐ 4.0",
  },
  {
    text: "Super service. T-shirt, quality, and fabric, fantastic work with excellent fitting. Valuable of money worth.",
    image: "",
    name: "venkat vicky",
    role: "⭐⭐⭐⭐⭐ 5.0",
  },
  {
    text: "The T-shirt printing quality was excellent and all customized gifts are reasonable price value for money.",
    image: "",
    name: "Sameerpasha pathan",
    role: "⭐⭐⭐ 3.0",
  },
  {
    text: "Super T shirt quality & print are good and it's so budget friendly 🙂",
    image: "",
    name: "Shyam Pedduri",
    role: "⭐⭐⭐⭐⭐ 5.0",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-background py-20 relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-primary/30 bg-primary/10 text-primary py-1 px-4 rounded-lg text-sm font-medium">
              Testimonials
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tighter mt-5 text-center">
            What Our Customers Say
          </h2>
          <p className="text-center mt-5 text-muted-foreground">
            Real reviews from our valued customers on Google Business Profile.
          </p>
          <a
            href="https://www.google.com/maps/place/T+shirts+printing+SURYA+Enterprises/@17.5075651,78.4557259,17.5z/data=!4m8!3m7!1s0x3bcb91518c881d73:0x300bd79554f9141b!8m2!3d17.5075756!4d78.4558327!9m1!1b1!16s%2Fg%2F11wvjlftl_?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            View All Google Reviews
          </a>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
