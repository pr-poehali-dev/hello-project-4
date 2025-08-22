import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Протезы верхних конечностей",
      description: "Современные функциональные протезы рук с микропроцессорным управлением",
      icon: "Hand"
    },
    {
      title: "Протезы нижних конечностей",
      description: "Высокотехнологичные протезы ног для активной жизни",
      icon: "Users"
    },
    {
      title: "Детское протезирование",
      description: "Специализированные решения для маленьких пациентов",
      icon: "Heart"
    },
    {
      title: "Спортивные протезы",
      description: "Протезы для занятий спортом и активного образа жизни",
      icon: "Zap"
    }
  ];

  const specialists = [
    {
      name: "Доктор Анна Петрова",
      role: "Главный врач-ортопед",
      experience: "15 лет опыта"
    },
    {
      name: "Игорь Сидоров",
      role: "Инженер-протезист",
      experience: "12 лет опыта"
    },
    {
      name: "Мария Козлова",
      role: "Реабилитолог",
      experience: "10 лет опыта"
    }
  ];

  const programs = [
    "Первичное протезирование",
    "Повторное протезирование", 
    "Психологическая поддержка",
    "Физическая реабилитация",
    "Социальная адаптация"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-medical-blue" size={32} />
              <span className="text-xl font-bold text-medical-gray">ПротезЦентр</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-medical-gray hover:text-medical-blue transition-colors">Услуги</a>
              <a href="#prosthetics" className="text-medical-gray hover:text-medical-blue transition-colors">Протезы</a>
              <a href="#specialists" className="text-medical-gray hover:text-medical-blue transition-colors">Специалисты</a>
              <a href="#rehabilitation" className="text-medical-gray hover:text-medical-blue transition-colors">Реабилитация</a>
              <a href="#contact" className="text-medical-gray hover:text-medical-blue transition-colors">Контакты</a>
            </div>
            <Button className="bg-medical-blue hover:bg-blue-700 text-white">
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </nav>

      {/* Героблок */}
      <section className="bg-gradient-to-r from-medical-lightGray to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-medical-gray mb-6">
                Возвращаем возможность 
                <span className="text-medical-blue"> полноценной жизни</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Современные технологии протезирования и комплексная реабилитация 
                для людей с ограниченными возможностями
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-medical-blue hover:bg-blue-700 text-white">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на приём
                </Button>
                <Button size="lg" variant="outline" className="border-medical-green text-medical-green hover:bg-medical-green hover:text-white">
                  <Icon name="Video" className="mr-2" size={20} />
                  Онлайн консультация
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/d1d9055a-ab1c-459e-b89f-2678bcb361a4.jpg" 
                alt="Современный протез"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-medical-gray mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Предоставляем полный спектр услуг по протезированию и реабилитации
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="text-medical-blue" size={24} />
                  </div>
                  <CardTitle className="text-medical-gray">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Виды протезов */}
      <section id="prosthetics" className="py-20 bg-medical-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-medical-gray mb-4">Виды протезов</h2>
            <p className="text-lg text-gray-600">Индивидуальные решения для каждого пациента</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-medical-blue to-blue-600 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="text-medical-gray">Микропроцессорные протезы</CardTitle>
                <CardDescription>
                  Современные протезы с компьютерным управлением для максимального комфорта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Высокие технологии</Badge>
                  <Badge variant="secondary">Адаптивность</Badge>
                </div>
                <Button className="w-full bg-medical-green hover:bg-green-700 text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-medical-green to-green-600 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="text-medical-gray">Биоэлектрические протезы</CardTitle>
                <CardDescription>
                  Протезы, управляемые сигналами мышц для естественного движения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Биосигналы</Badge>
                  <Badge variant="secondary">Точность</Badge>
                </div>
                <Button className="w-full bg-medical-green hover:bg-green-700 text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-medical-gray to-gray-600 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="text-medical-gray">Косметические протезы</CardTitle>
                <CardDescription>
                  Протезы с максимальным сходством с естественными конечностями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Эстетика</Badge>
                  <Badge variant="secondary">Комфорт</Badge>
                </div>
                <Button className="w-full bg-medical-green hover:bg-green-700 text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Специалисты */}
      <section id="specialists" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-medical-gray mb-4">Наши специалисты</h2>
            <p className="text-lg text-gray-600">Команда профессионалов с многолетним опытом</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {specialists.map((specialist, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-medical-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="text-medical-blue" size={32} />
                  </div>
                  <CardTitle className="text-medical-gray">{specialist.name}</CardTitle>
                  <CardDescription className="text-medical-green font-medium">
                    {specialist.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="border-medical-blue text-medical-blue">
                    {specialist.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <img 
              src="/img/f53b54d1-5471-4a82-8193-9479d88781c1.jpg"
              alt="Команда специалистов"
              className="rounded-lg shadow-xl mx-auto max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Программы реабилитации */}
      <section id="rehabilitation" className="py-20 bg-medical-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-medical-gray mb-6">Программы реабилитации</h2>
              <p className="text-lg text-gray-600 mb-8">
                Комплексный подход к восстановлению и адаптации пациентов
              </p>
              <div className="space-y-4">
                {programs.map((program, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-medical-green rounded-full flex items-center justify-center">
                      <Icon name="Check" className="text-white" size={16} />
                    </div>
                    <span className="text-medical-gray font-medium">{program}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button className="bg-medical-green hover:bg-green-700 text-white mr-4">
                  Узнать подробнее
                </Button>
                <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
                  Записаться на программу
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="/img/31d7baec-252f-438c-8980-876ccc197fef.jpg"
                alt="Реабилитация"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Онлайн консультации */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-medical-blue to-blue-600 rounded-2xl p-12 text-white">
            <Icon name="Video" className="mx-auto mb-6 text-white" size={48} />
            <h2 className="text-3xl font-bold mb-4">Онлайн консультации</h2>
            <p className="text-xl mb-8 opacity-90">
              Получите профессиональную консультацию специалиста не выходя из дома
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на онлайн прием
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 bg-medical-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-medical-gray mb-4">Контакты</h2>
            <p className="text-lg text-gray-600">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Icon name="MapPin" className="mx-auto text-medical-blue mb-4" size={32} />
                <CardTitle className="text-medical-gray">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  г. Москва, ул. Медицинская, д. 15
                  <br />
                  Центр протезирования
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Icon name="Phone" className="mx-auto text-medical-blue mb-4" size={32} />
                <CardTitle className="text-medical-gray">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  +7 (495) 123-45-67
                  <br />
                  Круглосуточно
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Icon name="Mail" className="mx-auto text-medical-blue mb-4" size={32} />
                <CardTitle className="text-medical-gray">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  info@protez-center.ru
                  <br />
                  support@protez-center.ru
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-medical-gray text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Heart" className="text-medical-blue" size={32} />
                <span className="text-xl font-bold">ПротезЦентр</span>
              </div>
              <p className="text-gray-300">
                Ведущий центр протезирования и реабилитации в России
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Протезирование</li>
                <li>Реабилитация</li>
                <li>Консультации</li>
                <li>Техподдержка</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-gray-300">
                <li>О центре</li>
                <li>Специалисты</li>
                <li>Отзывы</li>
                <li>Новости</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@protez-center.ru</p>
                <p>г. Москва, ул. Медицинская, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 ПротезЦентр. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;