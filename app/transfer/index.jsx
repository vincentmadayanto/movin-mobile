import EmptyList from "../../src/components/common/EmptyList";
import { emptyImage } from "../../src/constant/images";

const TransferScreen = () => {
  return (
    <EmptyList
      onPress={() => console.log("Clicked")}
      image={emptyImage}
      buttonText="Pilih Bank Tujuan"
      description="Hai Vincent. Mau transfer uang ke bank apa nih?"
    />
  );
};
export default TransferScreen;
