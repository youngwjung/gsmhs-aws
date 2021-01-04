#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LabsStack } from '../lib/labs-stack';

const app = new cdk.App();
new LabsStack(app, 'LabsStack');
