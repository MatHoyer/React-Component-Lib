import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

enum DateString {
  full = 'eeee dd MMMM yyyy HH:mm',
  short = 'dd/MM/yyyy',
  day = 'eeee',
  date = 'dd MMMM yyyy',
  lDate = 'dd MMMM',
  monthNyear = 'MMMM yyyy',
  month = 'MMMM',
  year = 'yyyy',
  time = 'HH:mm',
}

const getDateAsString = (date: Date, type: DateString = DateString.full) => {
  return format(date, type, { locale: fr });
};

const DateDemo = () => {
  const date = new Date();
  const keys = Object.keys(DateString).filter((key): key is keyof typeof DateString => isNaN(Number(key)));

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>DateString key</TableHead>
          <TableHead>Formated date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {keys.map((key) => (
          <TableRow>
            <TableCell>{key}</TableCell>
            <TableCell>{getDateAsString(date, DateString[key])}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DateDemo;
