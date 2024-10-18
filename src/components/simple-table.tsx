import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { data, useSimpleTableData } from '@/hooks/test'

export function SimpleTable() {
  const simpleData = useSimpleTableData(data)
  const totalfi = simpleData.reduce((acc, cur) => acc + cur.fi, 0)
  const totalhi = simpleData.reduce((acc, cur) => acc + cur.hi, 0).toFixed(2)

  return (
    <Table>
      <TableCaption>Tabla de frecuencia simple.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>X</TableHead>
          <TableHead>fi</TableHead>
          <TableHead>Fi</TableHead>
          <TableHead>hi</TableHead>
          <TableHead>Hi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {simpleData.map(data => (
          <TableRow key={data.x}>
            <TableCell className="font-medium text-left">{data.x}</TableCell>
            <TableCell className="text-left">{data.fi}</TableCell>
            <TableCell className="text-left">{data.Fi}</TableCell>
            <TableCell className="text-left">{data.hi}</TableCell>
            <TableCell className="text-left">{data.Hi.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="text-left">
          <TableCell colSpan={1}>Total</TableCell>
          <TableCell className="text-left">{totalfi}</TableCell>
          <TableCell colSpan={1}>{simpleData.at(-1)?.Fi.toFixed(2)}</TableCell>
          <TableCell className="text-left">{totalhi}</TableCell>
          <TableCell className="text-left">
            {simpleData.at(-1)?.Hi.toFixed(2)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
