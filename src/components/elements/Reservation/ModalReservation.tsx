/* eslint-disable  */
import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from '../Modal';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';

interface ModalReservationProps {
  onSubmit: (arg: any) => void;
  isOpen: boolean;
  onClose: () => void;
}

const ModalReservation = ({
  onSubmit,
  isOpen,
  onClose,
}: ModalReservationProps) => {
  const [date, setDate] = React.useState<Date>();

  const [form, setForm] = useState({
    name: '',
    people: '',
    phone: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id);
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    onSubmit({ ...form, date });
  };

  const handleDisable =
    !form.name || !form.people || !form.phone || !form.email || !date;

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnClickOverlay={false}>
      <ModalHeader>Create Reservation</ModalHeader>
      <ModalBody>
        <div className="space-y-6">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Your Full Name"
                onChange={handleChange}
                value={form.name}
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="people">Number of People</Label>
              <Input
                id="people"
                placeholder="Number of People"
                value={form.people}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="Your Phone Number"
                onChange={handleChange}
                value={form.phone}
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-full p-0 z-[100000000]"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button
            disabled={handleDisable}
            className="mt-4"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalReservation;
