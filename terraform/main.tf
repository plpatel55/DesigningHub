terraform {
  required_providers { aws = { source = "hashicorp/aws" } }
}
provider "aws" { region = "us-east-1" }
# (EKS, RDS, S3, etc. modules would go here)
