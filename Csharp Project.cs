using System;

namespace PatientManagementSystem
{
    public delegate double BillingStrategy(double amount);

    public delegate void DepartmentNotification(string message);

    abstract class Patient
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Department { get; set; }

        public abstract double CalculateTreatmentBill();
    }

    class InPatient : Patient
    {
        public int DaysAdmitted { get; set; }

        public override double CalculateTreatmentBill()
        {
            return DaysAdmitted * 3000;
        }
    }

    class OutPatient : Patient
    {
        public override double CalculateTreatmentBill()
        {
            return 1500;
        }
    }

    class EmergencyPatient : Patient
    {
        public override double CalculateTreatmentBill()
        {
            return 5000;
        }
    }
    class BillingService
    {
        public BillingStrategy BillingDelegate;

        public double ApplyBillingStrategy(double baseAmount)
        {
            Console.WriteLine("\nApplying billing strategy using delegate...");
            return BillingDelegate(baseAmount);
        }
    }

    class Hospital
    {
        public event DepartmentNotification NotifyDepartment;

        public void AdmitPatient(Patient patient)
        {
            Console.WriteLine("\nPatient admitted successfully.");
            NotifyDepartment?.Invoke(
                $"Admission alert for {patient.Name} in {patient.Department} department.");
        }

        public void GenerateBill(Patient patient, double amount)
        {
            Console.WriteLine("\n----- BILL DETAILS -----");
            Console.WriteLine($"Patient Name : {patient.Name}");
            Console.WriteLine($"Age          : {patient.Age}");
            Console.WriteLine($"Department   : {patient.Department}");
            Console.WriteLine($"Total Amount : Rs.{amount}");

            NotifyDepartment?.Invoke(
                $"Billing completed for {patient.Name}. Inform {patient.Department} department.");
        }
    }

    class Program
    {
        static void Main()
        {
            Hospital hospital = new Hospital();

            hospital.NotifyDepartment += message =>
            {
                Console.WriteLine($"[DEPARTMENT NOTIFICATION] {message}");
            };

            Console.WriteLine("Enter Patient Name:");
            string name = Console.ReadLine();

            Console.WriteLine("Enter Age:");
            int age = int.Parse(Console.ReadLine());

            Console.WriteLine("Select Patient Type:");
            Console.WriteLine("1. InPatient");
            Console.WriteLine("2. OutPatient");
            Console.WriteLine("3. Emergency");
            int choice = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter Department (Cardiology / Neurology / Ortho):");
            string department = Console.ReadLine();

            Patient patient;

            if (choice == 1)
            {
                Console.WriteLine("Enter number of days admitted:");
                int days = int.Parse(Console.ReadLine());

                patient = new InPatient
                {
                    Name = name,
                    Age = age,
                    Department = department,
                    DaysAdmitted = days
                };
            }
            else if (choice == 2)
            {
                patient = new OutPatient
                {
                    Name = name,
                    Age = age,
                    Department = department
                };
            }
            else
            {
                patient = new EmergencyPatient
                {
                    Name = name,
                    Age = age,
                    Department = department
                };
            }

            hospital.AdmitPatient(patient);

            Console.WriteLine("\nCalculating treatment bill...");
            double baseAmount = patient.CalculateTreatmentBill();
            Console.WriteLine($"Base Treatment Cost: Rs.{baseAmount}");

            BillingService billingService = new BillingService();
            billingService.BillingDelegate = amount =>
            {
                double gst = amount * 0.18;   // 18% GST
                return amount + gst;
            };

            double finalAmount = billingService.ApplyBillingStrategy(baseAmount);

            hospital.GenerateBill(patient, finalAmount);

            Console.ReadLine();
        }
    }
}
