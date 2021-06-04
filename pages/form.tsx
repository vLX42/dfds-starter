import { TextField, Checkbox } from "@dfds-ui/forms";
import { AddressSelect, GooglePlacesAPIProvider } from "@dfds-ui/google-places";
import { Button, ButtonStack } from "@dfds-ui/react-components";
import { NativeSelectField } from "@dfds-ui/forms";
import { SelectField } from "@dfds-ui/forms/select-field/SelectField";
import { useForm, Controller } from "react-hook-form";
import Layout from "../components/Layout";

const defaultValues: {
  input?: string | undefined;
  checkbox?: string | undefined;
  gender?: string | undefined;
  nativeselect?: string | undefined;
  city?: string | undefined;
} = {
  input: "",
  checkbox: "",
  gender: "",
  nativeselect: "",
  city: "",
};

const FormPage = () => {
  const { handleSubmit, reset, watch, control, register } = useForm({
    defaultValues,
    mode: "onChange",
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="city"
          control={control}
          defaultValue={"female"}
          render={({ field }) => (
            <GooglePlacesAPIProvider
              apiKey="AIzaSyAZ_82MZOSocrO1qWnYCWh9oV0nZQS2Yeo"
              libraries="geometry,drawing,places"
            >
              <AddressSelect types={["(cities)"]} isClearable {...field} />
            </GooglePlacesAPIProvider>
          )}
        />

        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <SelectField
              label="Gender"
              options={[
                { value: "female", label: "Female" },
                { value: "male", label: "Male" },
              ]}
              {...field}
            />
          )}
        />

        <Checkbox {...register("checkbox")}>Checkbox</Checkbox>

        <NativeSelectField {...register("nativeselect")}>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
        </NativeSelectField>
        <TextField {...register("input")} />
        <ButtonStack>
          <Button
            variation="secondary"
            type="button"
            onClick={() => reset({ defaultValues })}
          >
            Reset
          </Button>
          <Button type="submit">Save</Button>
        </ButtonStack>
      </form>
    </Layout>
  );
};

export default FormPage;
