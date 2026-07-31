import mongoose from 'mongoose';

const SaasEnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number.'],
  },
  product: {
    type: String,
    required: [true, 'Please select a product.'],
  },
  message: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['New', 'Read', 'Contacted'],
    default: 'New',
  },
}, { timestamps: true });

export default mongoose.models.SaasEnquiry || mongoose.model('SaasEnquiry', SaasEnquirySchema);
