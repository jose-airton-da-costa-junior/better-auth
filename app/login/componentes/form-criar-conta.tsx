"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.email("Email inválido"),
  nome: z.string().min(1, "A nome não pode ficar vazio."),
  senha: z.string().min(5, "A senha precisa ter pelo menos 5 caracteres."),
});

export function FormCriarConta() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      nome: "",
      senha: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Crie sua Conta</CardTitle>
        <CardDescription>
          Crie sua conta para Acessar o Sistema.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="nome"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Nome</FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Digite Seu Nome"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Digite Seu Email"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup>
            <Controller
              name="senha"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Senha</FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Digite Sua Senha"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <Field orientation="vertical">
            <Button type="submit">Criar</Button>
          </Field>
        </form>
      </CardContent>
    </Card>
  );
}
