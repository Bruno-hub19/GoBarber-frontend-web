import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import logoImg from '../../assets/logo.svg';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthAvailability, setMonthAvailability] = useState<
    MonthAvailabilityItem[]
  >([]);

  const { signOut, user } = useAuth();

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${user.id}/availability-month`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then(response => {
        setMonthAvailability(response.data);
      });
  }, [currentMonth, user.id]);

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter(monthDay => monthDay.available === false)
      .map(monthDay => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, monthDay.day);
      });

    return dates;
  }, [currentMonth, monthAvailability]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber logo" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower size={16} />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>dia 15</span>
            <span>Sábado</span>
          </p>

          <NextAppointment>
            <strong>Atendimento à seguir</strong>
            <div>
              <img
                src="https://avatars2.githubusercontent.com/u/53710044?s=460&u=a892198f1f9c932c89f616e0653290499afd9944&v=4"
                alt="Bruno Nascimento"
              />

              <strong>Bruno Nascimento</strong>
              <span>
                <FiClock size={16} />
                10:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock size={16} />
                09:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/53710044?s=460&u=a892198f1f9c932c89f616e0653290499afd9944&v=4"
                  alt="Bruno Nascimento"
                />

                <strong>Bruno Nascimento</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock size={16} />
                10:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/53710044?s=460&u=a892198f1f9c932c89f616e0653290499afd9944&v=4"
                  alt="Bruno Nascimento"
                />

                <strong>Bruno Nascimento</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock size={16} />
                13:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/53710044?s=460&u=a892198f1f9c932c89f616e0653290499afd9944&v=4"
                  alt="Bruno Nascimento"
                />

                <strong>Bruno Nascimento</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>

        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            onMonthChange={handleMonthChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
