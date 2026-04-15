
export interface TableData {
  id: string;
  dateTime: string;
  modeOfTransport: string;
  referenceNo: string;
  number: string;
  type: string;
  beNumber: string;
  beDate: string;
  city: string;
  importer: string;
  supplier: string;
  dutyPayable: string;
  assessableVal: string;
  igmNo: string;
  eta: string;
  mawbMblNo: string;
  mawbDt: string;
  hawbHblNo: string;
  hawbDt: string;
  fromAddress: string;
  toAddress: string;
  emailSubjectLine: string;
  mailReceivedTime: string;
  createdBy: string;
  updatedBy: string;
  status: string;
  cbBranch: string;
  jobDataProgress: {
    percentage: number;
    color: 'yellow' | 'red' | 'green';
  };
  rdpRslAmount?: string;
  drawbackAmount?: string;
  totalPackages?: string;
  grossWeight?: string;
  netWeight?: string;
  license?: string;
  nfei?: string;
  portOfFinalDestination?: string;
}

export const generateTableData = (activeTab: string = 'Imports'): TableData[] => {
  const data: TableData[] = [];
  
  const prefix = activeTab === 'Exports' ? 'ECB' : 'ICB';
  
  const sampleValues = {
    referenceNos: ['REF12345678', 'REF23456789', 'REF34567890', 'REF45678901', 'REF56789012'],
    modesOfTransport: ['A-Air', 'S-Sea', 'L-Land'], 
    types: ['H-Home Consumption', 'W-Warehouse', 'X-Ex-bond clearance'],
    beNumbers: ['1234567', '2345678', '3456789', '4567890', '5678901'],
    beDates: ['15/09/24', '16/09/24', '17/09/24', '18/09/24', '19/09/24'],
    cbBranches: ['001', '002', '003', '001', '002'],
    cities: ['Chennai', 'Bangalore', 'Mumbai', 'Chennai', 'Bangalore'],
    importers: ['Global Import Co', 'International Trade Ltd', 'Worldwide Imports', 'Trade Solutions Inc', 'Export-Import Partners'],
    suppliers: ['Maritime Services Ltd', 'Offshore Solutions Inc', 'Deep Water Tech', 'Ocean Engineering Co', 'Subsea Specialists'],
    dutyPayables: ['₹18,750', '₹13,425', '₹32,250', '₹11,520', '₹21,780'],
    assessableVals: ['₹1,25,000', '₹89,500', '₹2,15,000', '₹76,800', '₹1,45,200'],
    igmNos: ['12345678', '23456789', '34567890', '45678901', '56789012'],
    etas: ['17/09/24', '18/09/24', '19/09/24', '20/09/24', '21/09/24'],
    mawbMblNos: ['SWENSINMAA2309210', 'UAECXPMAA2309211', 'SGSINMAA2309212', 'AEDXBMAA2309213', 'INMUMBAA2309214'],
    mawbDts: ['17/09/24', '18/09/24', '19/09/24', '20/09/24', '21/09/24'],
    hawbHblNos: ['LESSGMAA230931000', 'UAESGMAA230931001', 'SGHMAA230931002', 'AEDMAA230931003', 'INMAA230931004'],
    hawbDts: ['17/09/24', '18/09/24', '19/09/24', '20/09/24', '21/09/24'],
    fromAddresses: ['raja.ccu@abc.com', 'operations@abc.com', 'export@abc.com', 'import@abc.com', 'logistics@abc.com'],
    toAddresses: ['import@abc.com', 'operations@abc.com', 'export@abc.com', 'customs@abc.com', 'logistics@abc.com'],
    emailSubjectLines: ['Create a job for phomas diagnostics except packing List', 'Urgent clearance required for shipment', 'Documentation required for customs', 'Invoice and packing list attached', 'Shipment arrival notification'],
    mailReceivedTimes: ['12/12/24 12:30 PM', '12/12/24 01:15 PM', '12/12/24 02:45 PM', '12/12/24 03:20 PM', '12/12/24 04:10 PM'],
    createdBy: ['John Smith', 'Sarah Johnson', 'Mike Davis', 'Lisa Wilson', 'Tom Brown'],
    updatedBy: ['Admin User', 'System Auto', 'Manager1', 'Supervisor', 'Admin User'],
    statuses: [
      'Positive Acknowledgement', 
      'Negative Acknowledgement', 
      'Query Raised', 
      'Job submitted to icegate', 
      'Job Created', 
      'OOC Received', 
      'Gatepass received'
    ],
    jobDataProgressValues: [
      { percentage: 25, color: 'yellow' as const },
      { percentage: 100, color: 'green' as const },
      { percentage: 80, color: 'green' as const },
      { percentage: 60, color: 'yellow' as const },
      { percentage: 100, color: 'green' as const },
      { percentage: 15, color: 'red' as const },
      { percentage: 100, color: 'green' as const },
      { percentage: 45, color: 'yellow' as const },
      { percentage: 100, color: 'green' as const },
      { percentage: 30, color: 'red' as const }
    ],
    // New fields sample data
    rdpRslAmounts: ['₹5,000', '₹2,500', '₹10,000', '₹1,500', '₹7,500'],
    drawbackAmounts: ['₹2,500', '₹1,200', '₹5,000', '₹800', '₹3,500'],
    totalPackages: ['10 Box', '5 Pallets', '20 Cartons', '8 Crates', '15 Bags'],
    grossWeights: ['500 KG', '250 KG', '1000 KG', '300 KG', '750 KG'],
    netWeights: ['450 KG', '225 KG', '900 KG', '270 KG', '675 KG'],
    licenses: ['LIC123', 'LIC456', 'LIC789', 'LIC012', 'LIC345'],
    nfeis: ['Yes', 'No', 'Yes', 'No', 'Yes'],
    portsOfFinalDestination: ['New York', 'London', 'Dubai', 'Singapore', 'Hamburg']
  };

  for (let i = 0; i < 30; i++) {
    const index = i % 5;
    const typeIndex = i % 3; // For BE Types (3 values)
    const motIndex = Math.floor(Math.random() * 3); // Random Mode of Transport
    const progressIndex = i % 10; // For Progress values (10 values now)
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    
    // First, determine the progress
    const progressValue = sampleValues.jobDataProgressValues[progressIndex];
    
    // Set status based on progress
    let currentStatus;
    let jobProgress;
    
    if (progressValue.percentage < 100) {
      // If progress is less than 100%, show "Job Created"
      currentStatus = 'Job Created';
      jobProgress = progressValue;
    } else {
      // If progress is 100%, show one of the completed statuses
      const completedStatuses = [
        'OOC Received',
        'Gatepass Received',
        'Positive Acknowledgement',
        'Negative Acknowledgement'
      ];
      currentStatus = completedStatuses[i % 4]; // Cycle through the 4 completed statuses
      jobProgress = { percentage: 100, color: 'green' as const };
    }
    
    data.push({
      id: `row-${i + 1}`,
      dateTime: date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }) + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modeOfTransport: sampleValues.modesOfTransport[motIndex],
      referenceNo: sampleValues.referenceNos[index],
      number: `${prefix}/${83301 + i}/25-26`, // Unique sequential number
      type: sampleValues.types[typeIndex],
      beNumber: sampleValues.beNumbers[index],
      beDate: sampleValues.beDates[index],
      city: sampleValues.cities[index],
      cbBranch: sampleValues.cbBranches[index],
      importer: sampleValues.importers[index],
      supplier: sampleValues.suppliers[index],
      dutyPayable: sampleValues.dutyPayables[index],
      assessableVal: sampleValues.assessableVals[index],
      igmNo: sampleValues.igmNos[index],
      eta: sampleValues.etas[index],
      mawbMblNo: sampleValues.mawbMblNos[index].replace(/^\+/, ''),
      mawbDt: sampleValues.mawbDts[index],
      hawbHblNo: sampleValues.hawbHblNos[index].replace(/^\+/, ''),
      hawbDt: sampleValues.hawbDts[index],
      fromAddress: sampleValues.fromAddresses[index],
      toAddress: sampleValues.toAddresses[index],
      emailSubjectLine: sampleValues.emailSubjectLines[index],
      mailReceivedTime: sampleValues.mailReceivedTimes[index],
      createdBy: sampleValues.createdBy[index],
      updatedBy: sampleValues.updatedBy[index],
      status: currentStatus,
      jobDataProgress: jobProgress,
      // New fields
      rdpRslAmount: sampleValues.rdpRslAmounts[index],
      drawbackAmount: sampleValues.drawbackAmounts[index],
      totalPackages: sampleValues.totalPackages[index],
      grossWeight: sampleValues.grossWeights[index],
      netWeight: sampleValues.netWeights[index],
      license: sampleValues.licenses[index],
      nfei: sampleValues.nfeis[index],
      portOfFinalDestination: sampleValues.portsOfFinalDestination[index]
    });
  }

  return data;
};
