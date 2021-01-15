#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { EipStack } from "../lib/week1/eip";
import { EbsStack } from "../lib/week1/ebs";
import { CliStack } from "../lib/week1/cli";

const app = new cdk.App();
new EipStack(app, "eip");
new EbsStack(app, "ebs");
new CliStack(app, "cli");
