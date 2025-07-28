// utils/formUtils.js
export const calculateAge = (dateOfBirth) => {
  if (!dateOfBirth) return ''
  
  const dob = new Date(dateOfBirth)
  const today = new Date()
  let age = today.getFullYear() - dob.getFullYear()
  const monthDiff = today.getMonth() - dob.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--
  }
  
  return age.toString()
}

export const validateForm = (formData, requiredFields) => {
  // Check required fields
  for (let field of requiredFields) {
    if (!formData[field]) {
      return { isValid: false, message: 'Please fill in all required fields.' }
    }
  }

  // Check services selection
  if (formData.services.length === 0) {
    return { 
      isValid: false, 
      message: 'Please select at least one service you need support with.' 
    }
  }

  // Check other income field if "other" is selected
  if (formData.income === 'other' && !formData.otherIncomeValue) {
    return { 
      isValid: false, 
      message: 'Please specify your monthly income.' 
    }
  }

  return { isValid: true, message: '' }
}

export const handleInputFocus = (e) => {
  e.target.style.borderColor = '#3b82f6'
  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
}

export const handleInputBlur = (e) => {
  e.target.style.borderColor = '#e5e7eb'
  e.target.style.boxShadow = 'none'
}

export const getSelectedOptionStyle = (isSelected, baseStyle) => ({
  ...baseStyle,
  background: isSelected ? '#eff6ff' : baseStyle.background,
  borderColor: isSelected ? '#3b82f6' : '#e5e7eb'
})

export const formatServiceName = (serviceName) => {
  return serviceName
    .replace('-', ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
}