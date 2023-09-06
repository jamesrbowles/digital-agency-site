import ContactHeading from '../components/contact/ContactHeading';
import GoogleLocation from '../components/contact/GoogleLocation';
import BreadCrumb from '../components/global/BreadCrumb';

export const metadata = {
  title: 'Contact | Pexel Digital Agency',
  description:
    'Pexel is a leading full-service digital agency based in London. We make mobile apps, websites & brands, that people appreciate all around the world.',
};

export default function Contact() {
  return (
    <div>
      <div className="hero-gradient relative">
        <div className="max-w-[1316px] mx-auto px-5 h-[777px] max-[880px]:h-full">
          <BreadCrumb title="Contact" />
          <ContactHeading />
        </div>
      </div>
      <div>
        <GoogleLocation />
      </div>
    </div>
  );
}
