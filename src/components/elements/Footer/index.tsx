import { LOGO_WITH_NAME } from '@/configs/images';

const Footer = () => {
  const product = ['About', 'Menu', 'Testimonial'];
  const category = ['Popular', 'Salad', 'Vegan'];
  const company = ['About Us', 'Contact Us', 'Privacy Policy'];

  return (
    <footer className="py-4 bg-[#FDF9ED] min-h-[20vh] px-4 md:px-12">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <img
            src={LOGO_WITH_NAME}
            alt="logo"
            className="bg-cover w-[150px] md:w-[200px] h-auto"
          />

          <p className="font-semibold text-lg mt-4">
            34 Altvaterstraße, Steglitz-Zehlendorf <br /> Berlin, Germany <br />
            14129
          </p>
        </div>
        <div className="flex space-x-0 md:space-x-8 flex-col md:flex-row">
          <div>
            <h5 className="text-lg font-semibold">Product</h5>
            <ul>
              {product.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold">Category</h5>
            <ul>
              {category.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold">Company</h5>
            <ul>
              {company.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className='text-center mt-8'>Copyright &copy; 2024. Designed and Developed by Rima</p>
    </footer>
  );
};

export default Footer;
