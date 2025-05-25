# Deploy Laravel with RDS and EC2 using AWS CDK

This project provisions the infrastructure for a Laravel application using AWS CDK (TypeScript). It deploys:

- EC2 instance (Ubuntu)
- RDS instance (MySQL)
- Security groups
- VPC

## 💡 How to Use

### 1. Clone the repository
```bash
git clone https://github.com/your-username/laravel-rds-ec2-cdk.git
cd laravel-rds-ec2-cdk
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create SSH key pair
Ensure a key pair named `ec2-key-pair` exists in your AWS region.

### 4. Deploy the stack
```bash
cdk deploy \
  --outputs-file ./cdk-outputs.json
```

### 5. Connect to EC2
```bash
ssh -i ~/.ssh/ec2-key-pair.pem ec2-user@<EC2_PUBLIC_IP>
```

### 6. Cleanup
```bash
cdk destroy
```

## 📦 Notes

- RDS username/password are auto-generated and stored in AWS Secrets Manager
- EC2 is provisioned with basic network and access config
- You can extend this to install Laravel via UserData or Ansible

## 📸 Demo Output
*(Add terminal output + architecture diagram here)*

## 📜 License
MIT
