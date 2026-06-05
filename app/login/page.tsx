import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FormCriarConta } from "./componentes/form-criar-conta";
import { FormEntrar } from "./componentes/form-entrar";

export default function page() {
  return (
    <div>
      <Tabs defaultValue="entrar" className="w-100px">
        <TabsList>
          <TabsTrigger value="entrar">Entrar</TabsTrigger>
          <TabsTrigger value="criar-conta">Criar Conta</TabsTrigger>
        </TabsList>
        <TabsContent value="entrar">
          <FormEntrar />
        </TabsContent>
        <TabsContent value="criar-conta">
          <FormCriarConta />
        </TabsContent>
      </Tabs>
    </div>
  );
}
