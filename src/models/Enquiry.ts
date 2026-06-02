import mongoose from 'mongoose';

const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
  },
  company: {
    type: String,
  },
  phone: {
    type: String,
  },
  service: {
    type: String,
  },
  message: {
    type: String,
    required: [true, 'Please provide a message.'],
  },
  status: {
    type: String,
    enum: ['New', 'Read', 'Contacted'],
    default: 'New',
  },
}, { timestamps: true });

export default mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);
