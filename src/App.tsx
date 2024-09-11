import Header from '@/components/elements/Header';
import Hero from '@/components/elements/Hero';
import Menu from './components/elements/Menu';
import Testimonial from './components/elements/Testimonial';
import Footer from './components/elements/Footer';
import { useState } from 'react';
import ModalReservation from './components/elements/Reservation/ModalReservation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [modal, setModal] = useState(false);

  const handleSubmit = () => {
    toast.success('Reservation has been created!');
    setModal(false);
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <ModalReservation
        isOpen={modal}
        onClose={() => setModal(false)}
        onSubmit={handleSubmit}
      />
      <Header />
      <main>
        <Hero onModal={() => setModal(!modal)} />
        <Menu />
        <Testimonial />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
