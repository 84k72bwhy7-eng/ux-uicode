import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Search,
  Download,
  Upload,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Phone,
  Archive,
} from "lucide-react";

const clientsData = [
  {
    id: 1,
    name: "Bakhriddin",
    group: "Лид",
    phone: "Khaitov",
    source: "Instagram",
    status: "Yangi",
    created: "21/02/2026",
  },
  {
    id: 2,
    name: "Farxod",
    group: "Лид",
    phone: "664445522",
    source: "Instagram",
    status: "Yangi",
    created: "11/02/2026",
  },
  {
    id: 3,
    name: "sabzi",
    group: "Лид",
    phone: "2233345544",
    source: "-",
    status: "Yangi",
    created: "11/02/2026",
  },
  {
    id: 4,
    name: "jahongir",
    group: "Лид",
    phone: "+998883003020",
    source: "-",
    status: "Yangi",
    created: "11/02/2026",
  },
  {
    id: 5,
    name: "Aziza",
    group: "O'quvchi",
    phone: "+998901234567",
    source: "Telegram",
    status: "Bog'lanildi",
    created: "05/02/2026",
  },
  {
    id: 6,
    name: "Sardor",
    group: "O'quvchi",
    phone: "+998907654321",
    source: "Website",
    status: "Sotildi",
    created: "01/02/2026",
  },
];

const statusColors: Record<string, string> = {
  Yangi: "bg-yellow-100 text-yellow-700",
  "Bog'lanildi": "bg-blue-100 text-blue-700",
  Sotildi: "bg-green-100 text-green-700",
};

export function ClientsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [groupFilter, setGroupFilter] = useState("all");

  const filtered = clientsData.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || c.status === statusFilter;
    const matchGroup = groupFilter === "all" || c.group === groupFilter;
    return matchSearch && matchStatus && matchGroup;
  });

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          placeholder="Telefon yoki ism bo'yicha qidirish..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 h-11 bg-white"
        />
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1>Mijozlar</h1>
        <div className="flex items-center gap-2 flex-wrap">
          <Button variant="outline" size="sm" className="gap-1.5">
            <Upload className="w-4 h-4" />
            Import
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="w-4 h-4" />
            Eksport
          </Button>
          <Button
            size="sm"
            className="gap-1.5 bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            <Plus className="w-4 h-4" />
            Mijoz qo'shish
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[160px] bg-white">
            <SelectValue placeholder="Barcha statuslar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Barcha statuslar</SelectItem>
            <SelectItem value="Yangi">Yangi</SelectItem>
            <SelectItem value="Bog'lanildi">Bog'lanildi</SelectItem>
            <SelectItem value="Sotildi">Sotildi</SelectItem>
          </SelectContent>
        </Select>
        <Select value={groupFilter} onValueChange={setGroupFilter}>
          <SelectTrigger className="w-[160px] bg-white">
            <SelectValue placeholder="Barcha guruhlar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Barcha guruhlar</SelectItem>
            <SelectItem value="Лид">Лид</SelectItem>
            <SelectItem value="O'quvchi">O'quvchi</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm" className="gap-1.5">
          <Archive className="w-4 h-4" />
          Arxivlanganlar
        </Button>
      </div>

      {/* Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs uppercase text-gray-400">Ism</TableHead>
              <TableHead className="text-xs uppercase text-gray-400">Telefon</TableHead>
              <TableHead className="text-xs uppercase text-gray-400">Manba</TableHead>
              <TableHead className="text-xs uppercase text-gray-400">Status</TableHead>
              <TableHead className="text-xs uppercase text-gray-400">Yaratilgan</TableHead>
              <TableHead className="text-xs uppercase text-gray-400">Amallar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((client) => (
              <TableRow key={client.id}>
                <TableCell>
                  <div>
                    <div className="text-sm">{client.name}</div>
                    <div className="text-xs text-yellow-600">{client.group}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-yellow-600 text-sm">
                    <Phone className="w-3 h-3" />
                    {client.phone}
                  </div>
                </TableCell>
                <TableCell className="text-sm">{client.source}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={`${statusColors[client.status] || "bg-gray-100 text-gray-700"} border-0 text-xs`}
                  >
                    {client.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-gray-500">{client.created}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <Pencil className="w-4 h-4 text-gray-400" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
