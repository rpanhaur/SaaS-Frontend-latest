


// 'use client';

// import { appDispatch } from '@/store/hooks';
// import { createInstitute } from '@/store/institute/institute-slice';
// import { ChangeEvent, FormEvent, useState } from 'react';

// export default function CreateInstitutePage() {

//   const dispatch=appDispatch()
//   const [idType, setIdType] = useState('');
//   const [instituteData,setInstituteData]=useState({
//     instituteName:"",
//     instituteAddress:"",
//     instituteEmail:"",
//     institutePhone:"",
//     instituteVatNo:"",
//     institutePanNo:"",

//   })

//   const handleChangeInstituteData=(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
//     const {name,value}=e.target
//     setInstituteData({
//       ...instituteData,
//       [name]:value
//     })

//   }
//   const handleSubmissionInstitute=(e:FormEvent<HTMLFormElement>)=>{
//     e.preventDefault()

//     dispatch(createInstitute(instituteData))


    
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
//       <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8">
//         <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Create Institute</h2>

//         <form className="space-y-5">
//           {/* Institute Name */}
//           <InputField label="Institute Name" id="instituteName" placeholder="Enter institute name"  />

//           {/* Institute Address */}
//           <TextAreaField label="Institute Address" id="instituteAddress" placeholder="Enter full address" />

//           {/* Institute Email */}
//           <InputField label="Institute Email" id="instituteEmail" type="email" placeholder="example@email.com" />

//           {/* Institute Phone */}
//           <InputField label="Institute Phone" id="institutePhone" placeholder="+977-98XXXXXXXX" />

//           {/* VAT or PAN Selection */}
//           <div>
//             <label htmlFor="idType" className="block text-sm font-medium text-gray-700 mb-1">
//               Identification Type
//             </label>
//             <select
//               id="idType"
//               value={idType}
//               onChange={(e) => setIdType(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="">-- Select VAT or PAN --</option>
//               <option value="vat">VAT Number</option>
//               <option value="pan">PAN Number</option>
//             </select>
//           </div>

//           {/* Conditional VAT or PAN Field */}
//           {idType === 'vat' && (
//             <InputField label="VAT Number" id="vatNumber" placeholder="Enter VAT Number" />
//           )}
//           {idType === 'pan' && (
//             <InputField label="PAN Number" id="panNumber" placeholder="Enter PAN Number" />
//           )}

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
//             >
//               Create
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// // 🧩 Reusable Input Field Component
// const InputField = ({
//   label,
//   id,
//   type = 'text',
//   placeholder,
// }: {
//   label: string;
//   id: string;
//   type?: string;
//   placeholder: string;
// }) => (
//   <div>
//     <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
//       {label}
//     </label>
//     <input
//       type={type}
//       id={id}
//       placeholder={placeholder}
//       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//     />
//   </div>
// );

// // 🧩 Reusable TextArea Field Component
// const TextAreaField = ({
//   label,
//   id,
//   placeholder,
// }: {
//   label: string;
//   id: string;
//   placeholder: string;
// }) => (
//   <div>
//     <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
//       {label}
//     </label>
//     <textarea
//       id={id}
//       rows={3}
//       placeholder={placeholder}
//       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//     />
//   </div>
// );


'use client';

import { appDispatch } from '@/store/hooks';
import { createInstitute } from '@/store/institute/institute-slice';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function CreateInstitutePage() {
  const dispatch = appDispatch();

  const [idType, setIdType] = useState('');
  const [instituteData, setInstituteData] = useState({
    instituteName: '',
    instituteAddress: '',
    instituteEmail: '',
    institutePhone: '',
    instituteVatNo: '',
    institutePanNo: '',
  });

 
  

  // ✅ Handles input change and updates state
  const handleChangeInstituteData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInstituteData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Handles form submission
  const handleSubmissionInstitute = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // You may want to conditionally remove VAT or PAN before dispatching
    const finalData = { ...instituteData };
    if (idType === 'vat') finalData.institutePanNo = '';
    else if (idType === 'pan') finalData.instituteVatNo = '';

    dispatch(createInstitute(finalData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Create Institute</h2>

        <form className="space-y-5" onSubmit={handleSubmissionInstitute}>
          {/* Institute Name */}
          <InputField
            label="Institute Name"
            id="instituteName"
            name="instituteName"
            placeholder="Enter institute name"
            value={instituteData.instituteName}
            onChange={handleChangeInstituteData}
          />

          {/* Institute Address */}
          <TextAreaField
            label="Institute Address"
            id="instituteAddress"
            name="instituteAddress"
            placeholder="Enter full address"
            value={instituteData.instituteAddress}
            onChange={handleChangeInstituteData}
          />

          {/* Institute Email */}
          <InputField
            label="Institute Email"
            id="instituteEmail"
            name="instituteEmail"
            type="email"
            placeholder="example@email.com"
            value={instituteData.instituteEmail}
            onChange={handleChangeInstituteData}
          />

          {/* Institute Phone */}
          <InputField
            label="Institute Phone"
            id="institutePhone"
            name="institutePhone"
            placeholder="+977-98XXXXXXXX"
            value={instituteData.institutePhone}
            onChange={handleChangeInstituteData}
          />

          {/* VAT or PAN Selection */}
          <div>
            <label htmlFor="idType" className="block text-sm font-medium text-gray-700 mb-1">
              Identification Type
            </label>
            <select
              id="idType"
              value={idType}
              onChange={(e) => setIdType(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select VAT or PAN --</option>
              <option value="vat">VAT Number</option>
              <option value="pan">PAN Number</option>
            </select>
          </div>

          {/* Conditional VAT or PAN Field */}
          {idType === 'vat' && (
            <InputField
              label="VAT Number"
              id="instituteVatNo"
              name="instituteVatNo"
              placeholder="Enter VAT Number"
              value={instituteData.instituteVatNo}
              onChange={handleChangeInstituteData}
            />
          )}
          {idType === 'pan' && (
            <InputField
              label="PAN Number"
              id="institutePanNo"
              name="institutePanNo"
              placeholder="Enter PAN Number"
              value={instituteData.institutePanNo}
              onChange={handleChangeInstituteData}
            />
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


const InputField = ({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

const TextAreaField = ({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      rows={3}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);
