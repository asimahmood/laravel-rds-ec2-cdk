import * as cdk from 'aws-cdk-lib';
import { LaravelRdsEc2Stack } from '../lib/laravel-rds-ec2-stack';

const app = new cdk.App();
new LaravelRdsEc2Stack(app, 'LaravelRdsEc2Stack');
