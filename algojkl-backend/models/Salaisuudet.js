import mongoose from 'mongoose';

const SalaisuudetSchema = new mongoose.Schema(
  { secretText: String },
  { collection: 'Salaisuudet' }
);

export default mongoose.model('Salaisuudet', SalaisuudetSchema);
