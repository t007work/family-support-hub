// components/FormSections.jsx
import { motion } from 'framer-motion'
import { User, Users, DollarSign, MapPin, CheckCircle } from 'lucide-react'
import { 
  inputStyle, 
  labelStyle, 
  sectionHeaderStyle, 
  iconStyle, 
  gridStyle,
  radioOptionStyle,
  checkboxOptionStyle
} from '../styles/signupStyles'
import { 
  genderOptions, 
  incomeOptions, 
  countryOptions, 
  serviceOptions 
} from '../constants/formData'
import { 
  handleInputFocus, 
  handleInputBlur, 
  getSelectedOptionStyle 
} from '../utils/formUtils'
import { formAnimations } from '../constants/animations'

export function PersonalInfoSection({ formData, handleInputChange }) {
  return (
    <div>
      <div style={sectionHeaderStyle}>
        <div style={{
          ...iconStyle,
          background: 'linear-gradient(135deg, #3b82f6, #2563eb)'
        }}>
          <User style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>
          Personal Information
        </h2>
      </div>

      <div style={gridStyle}>
        <div>
          <label htmlFor="fullName" style={labelStyle}>
            Full Given Name <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="As per NRIC"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>
            Email Address <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="your.email@example.com"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>

        <div>
          <label htmlFor="phone" style={labelStyle}>
            Phone Number <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="+65 9123 4567"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>

        <div>
          <label htmlFor="dob" style={labelStyle}>
            Date of Birth <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            style={inputStyle}
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>

        <div>
          <label htmlFor="age" style={labelStyle}>
            Age <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            style={{
              ...inputStyle,
              background: '#f9fafb',
              color: '#6b7280'
            }}
            placeholder="Auto-calculated"
            readOnly
            required
          />
        </div>

        <div>
          <label style={labelStyle}>
            Gender <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '0.5rem'
          }}>
            {genderOptions.map((option) => (
              <label key={option.value} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}>
                <input
                  type="radio"
                  name="gender"
                  value={option.value}
                  checked={formData.gender === option.value}
                  onChange={handleInputChange}
                  style={{
                    width: '1rem',
                    height: '1rem',
                    accentColor: '#3b82f6'
                  }}
                  required
                />
                <span style={{
                  fontSize: '0.875rem',
                  color: '#374151'
                }}>
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function HouseholdInfoSection({ formData, handleInputChange }) {
  return (
    <div>
      <div style={sectionHeaderStyle}>
        <div style={{
          ...iconStyle,
          background: 'linear-gradient(135deg, #6366f1, #4f46e5)'
        }}>
          <Users style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>
          Household Information
        </h2>
      </div>

      <div style={gridStyle}>
        <div>
          <label htmlFor="householdSize" style={labelStyle}>
            How many people are currently staying with you? <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="number"
            id="householdSize"
            name="householdSize"
            value={formData.householdSize}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="Including yourself"
            min="1"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>

        <div>
          <label htmlFor="children" style={labelStyle}>
            How many children do you have? <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="number"
            id="children"
            name="children"
            value={formData.children}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="Number of children"
            min="0"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
      </div>
    </div>
  )
}

export function FinancialInfoSection({ formData, handleInputChange }) {
  return (
    <div>
      <div style={sectionHeaderStyle}>
        <div style={{
          ...iconStyle,
          background: 'linear-gradient(135deg, #10b981, #059669)'
        }}>
          <DollarSign style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>
          Financial Information
        </h2>
      </div>

      <div>
        <label style={{ ...labelStyle, marginBottom: '1rem' }}>
          What is your monthly income? <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          {incomeOptions.map((option) => (
            <label 
              key={option.value} 
              style={getSelectedOptionStyle(
                formData.income === option.value, 
                radioOptionStyle
              )}
            >
              <input
                type="radio"
                name="income"
                value={option.value}
                checked={formData.income === option.value}
                onChange={handleInputChange}
                style={{
                  width: '1rem',
                  height: '1rem',
                  accentColor: '#3b82f6'
                }}
                required
              />
              <span style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#374151'
              }}>
                {option.label}
              </span>
            </label>
          ))}
        </div>

        {formData.income === 'other' && (
          <motion.div {...formAnimations.conditionalField} style={{ marginTop: '1rem' }}>
            <label htmlFor="otherIncomeValue" style={labelStyle}>
              Please specify your monthly income <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              id="otherIncomeValue"
              name="otherIncomeValue"
              value={formData.otherIncomeValue}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="e.g., $4,500 or Below $1,000"
              required={formData.income === 'other'}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}

export function AddressInfoSection({ formData, handleInputChange }) {
  return (
    <div>
      <div style={sectionHeaderStyle}>
        <div style={{
          ...iconStyle,
          background: 'linear-gradient(135deg, #a855f7, #9333ea)'
        }}>
          <MapPin style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>
          Address Information
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          <div>
            <label htmlFor="block" style={labelStyle}>
              Block <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              id="block"
              name="block"
              value={formData.block}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="e.g., 123"
              required
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          <div>
            <label htmlFor="street" style={labelStyle}>
              Street Address <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="e.g., Paris Lane"
              required
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          <div>
            <label htmlFor="unit" style={labelStyle}>
              Unit Number <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              id="unit"
              name="unit"
              value={formData.unit}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="e.g., #10-123"
              required
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          <div>
            <label htmlFor="postal" style={labelStyle}>
              Postal Code <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              id="postal"
              name="postal"
              value={formData.postal}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="e.g., 833123"
              required
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
        </div>

        <div>
          <label htmlFor="country" style={labelStyle}>
            Country <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            style={inputStyle}
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          >
            {countryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export function ServicesSection({ formData, handleInputChange }) {
  return (
    <div>
      <div style={sectionHeaderStyle}>
        <div style={{
          ...iconStyle,
          background: 'linear-gradient(135deg, #f59e0b, #d97706)'
        }}>
          <CheckCircle style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>
          Services Needed
        </h2>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ ...labelStyle, marginBottom: '1rem' }}>
          Which services are you seeking support for? <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <p style={{
          fontSize: '0.875rem',
          color: '#6b7280',
          marginBottom: '1.5rem'
        }}>
          Please select all that apply to your family's needs
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem'
      }}>
        {serviceOptions.map((service) => (
          <label 
            key={service.value}
            style={getSelectedOptionStyle(
              formData.services.includes(service.value),
              checkboxOptionStyle
            )}
          >
            <input
              type="checkbox"
              name="services"
              value={service.value}
              checked={formData.services.includes(service.value)}
              onChange={handleInputChange}
              style={{
                width: '1rem',
                height: '1rem',
                marginTop: '0.25rem',
                accentColor: '#3b82f6'
              }}
            />
            <div>
              <div style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#111827',
                marginBottom: '0.25rem'
              }}>
                {service.label}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: '#6b7280',
                lineHeight: 1.4
              }}>
                {service.description}
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}