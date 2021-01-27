#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { EipStack } from "../lib/week1/eip";
import { EbsStack } from "../lib/week1/ebs";
import { CliStack } from "../lib/week1/cli";
import { SslStack } from "../lib/week2/ssl";
import { ElbStack } from "../lib/week2/elb";


const app = new cdk.App();
new EipStack(app, "eip");
new EbsStack(app, "ebs");
new CliStack(app, "cli");
new SslStack(app, "ssl");
new ElbStack(app, "elb");
