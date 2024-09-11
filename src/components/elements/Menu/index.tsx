import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MENU_1 } from '@/configs/images';
import { StarFilledIcon } from '@radix-ui/react-icons';

const Menu = () => {
  const menu = [
    {
      name: 'Kebab Chicken with Vegetables',
      desc: 'Lorem Ipsumis simply dummy text of the printing brand typesetting industry.',
      price: 14,
      rating: 4,
    },
    {
      name: 'Kebab Chicken with Vegetables',
      desc: 'Lorem Ipsumis simply dummy text of the printing brand typesetting industry.',
      price: 14,
      rating: 4,
    },
    {
      name: 'Kebab Chicken with Vegetables',
      desc: 'Lorem Ipsumis simply dummy text of the printing brand typesetting industry.',
      price: 14,
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-white min-h-[60vh] px-4 md:px-12">
      <h1 className="text-4xl text-center mb-12 font-semibold">OUR MENU</h1>
      <p className='text-right font-semibold hover:text-gray-600 cursor-pointer mb-4'>See more</p>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6">
        {menu.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <img src={MENU_1} alt="menu" />
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-bold">${item.price}</h3>
              <div className="flex">
                {Array(item.rating)
                  .fill('')
                  .map((_, index) => (
                    <StarFilledIcon
                      key={index}
                      className="text-yellow-primary"
                    />
                  ))}
              </div>
              <h4 className="text-lg font-semibold mb-3">{item.name}</h4>
              <p className="text-sm mb-2">{item.desc}</p>
              <Button className="rounded-full">Order Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Menu;
