// constants/formData.js
export const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  dob: '',
  age: '',
  householdSize: '',
  income: '',
  otherIncomeValue: '',
  block: '',
  street: '',
  unit: '',
  postal: '',
  country: 'Singapore',
  gender: '',
  children: '',
  services: []
}

export const requiredFields = [
  'fullName', 'email', 'phone', 'dob', 'age', 
  'householdSize', 'income', 'block', 'street', 
  'unit', 'postal', 'country', 'gender', 'children'
]

export const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'prefer-not-say', label: 'Prefer not to say' }
]

export const incomeOptions = [
  { value: '1100-2500', label: '$1,100 - $2,500' },
  { value: '2500-3500', label: '$2,500 - $3,500' },
  { value: '3500-4000', label: '$3,500 - $4,000' },
  { value: 'other', label: 'Other' }
]

export const countryOptions = [
  { value: '', label: 'Select Country' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Malaysia', label: 'Malaysia' },
  { value: 'Other', label: 'Other' }
]

export const serviceOptions = [
  { 
    value: 'childcare', 
    label: 'Free Childcare & Daycare', 
    description: 'Safe, nurturing care for children ages 3-12' 
  },
  { 
    value: 'education', 
    label: 'Educational Support', 
    description: 'Tutoring, homework help, and school supplies' 
  },
  { 
    value: 'mental-health', 
    label: 'Mental Health Support', 
    description: 'Counseling, therapy, and wellness programs' 
  },
  { 
    value: 'financial', 
    label: 'Financial Assistance', 
    description: 'Direct aid, budgeting, and financial education' 
  },
  { 
    value: 'parenting', 
    label: 'Parenting Support', 
    description: 'Parent groups, workshops, and skill development' 
  },
  { 
    value: 'emergency', 
    label: 'Emergency Support', 
    description: 'Crisis intervention and immediate assistance' 
  }
]