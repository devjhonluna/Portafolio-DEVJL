import { Button, Divider, Input, Textarea } from "@nextui-org/react";
import { nombreReglas, correoReglas, mensajeReglas } from "@js/arrays/rules";
import { useEmailSender } from "@js/hooks/useEmailSender";
import { Toaster } from "react-hot-toast";

const Contacto = () => {
  const { register, handleSubmit, errors, sumbitEmail } = useEmailSender();
  return (
    <>
      <h2>Contacto</h2>
      <Divider className="border-2 bg-foreground-400" />
      <article>
        <p className="text-[clamp(0.75rem,_0.417vw_+_0.667rem,_1rem)]">
          ¿Tienes alguna pregunta o simplemente quieres charlar sobre desarrollo
          web? ¡Estoy aquí para ayudarte! No dudes en enviarme un mensaje y te
          responderé lo antes posible. 😊
        </p>
      </article>
      <form
        onSubmit={handleSubmit(sumbitEmail)}
        className="grid gap-4 place-items-center"
      >
        <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
          <Input
            type="text"
            variant="faded"
            label="Nombre completo"
            {...register("nombrecompleto", nombreReglas)}
            isInvalid={errors.nombrecompleto ? true : false}
            errorMessage={errors.nombrecompleto?.message}
            classNames={{errorMessage: "dark:text-danger-600",label:"dark:group-data-[invalid]:!text-danger-600"}}
          />
          <Input
            type="email"
            variant="faded"
            label="Correo"
            {...register("correo", correoReglas)}
            isInvalid={errors.correo ? true : false}
            errorMessage={errors.correo?.message}
            classNames={{errorMessage: "dark:text-danger-600",label:"dark:group-data-[invalid]:!text-danger-600"}}
          />
        </div>
        <Textarea
          minRows={3}
          variant="faded"
          label="Mensaje"
          {...register("mensaje", mensajeReglas)}
          isInvalid={errors.mensaje ? true : false}
          errorMessage={errors.mensaje?.message}
          classNames={{errorMessage: "dark:text-danger-600",label:"dark:group-data-[invalid]:!text-danger-600"}}
        />
        <Button
          size="md"
          type="submit"
          variant="ghost"
          color="primary"
          className="w-full sm:w-fit"
        >
          Enviar
        </Button>
      </form>
      <Toaster />
    </>
  );
};

export default Contacto;
