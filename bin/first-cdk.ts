#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FirstCdkStack } from '../lib/first-cdk-stack';

const app = new cdk.App();
new FirstCdkStack(app, 'FirstCdkStack', {  });
new FirstCdkStack(app, 'FirstCdkStack2', { })